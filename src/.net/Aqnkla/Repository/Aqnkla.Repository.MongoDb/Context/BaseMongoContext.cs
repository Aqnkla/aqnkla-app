// Copyright (C) Sorgo - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019
using Aqnkla.Domain.Base.Entity;
using Aqnkla.Domain.Helper;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Aqnkla.Repository.MongoDb.Context
{
    internal class BaseMongoContext<T> where T : BaseEntity<ObjectId>
    {
        public IMongoCollection<T> MongoCollection { get; private set; }
        public BaseMongoContext()
        {
            var client = MongoSorgoClient.GetClient();
            var domain = DomainHelper.GetDomainName(typeof(T));
            var database = client.GetDatabase($"Sorgo{domain}");
            MongoCollection = database.GetCollection<T>(DomainHelper.GetTypeName(typeof(T)));
        }
    }
}
