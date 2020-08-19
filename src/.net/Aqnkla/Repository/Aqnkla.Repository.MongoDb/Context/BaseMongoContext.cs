// Copyright (C) Sorgo - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019
using Aqnkla.Domain.Base.Entity;
using Aqnkla.Domain.Helper;
using Aqnkla.Repository.MongoDb.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Aqnkla.Repository.MongoDb.Context
{
    internal class BaseMongoContext<T> where T : BaseEntity<ObjectId>
    {
        public IMongoCollection<T> MongoCollection { get; private set; }
        public BaseMongoContext(IOptions<MongoDbSettings> options)
        {
            var settings = options.Value;
            var client = MongoSorgoClient.GetClient(settings);
            var domain = DomainHelper.GetDomainName(typeof(T));
            var database = client.GetDatabase($"{settings.DataBasePrefix}{domain}");
            MongoCollection = database.GetCollection<T>(DomainHelper.GetTypeName(typeof(T)));
        }
    }
}
