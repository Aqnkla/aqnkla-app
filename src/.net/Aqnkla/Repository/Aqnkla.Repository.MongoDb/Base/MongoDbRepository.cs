﻿// Copyright (C) Aqnkla - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019
using Aqnkla.Domain.Base.Entity;
using Aqnkla.Domain.Base.Repository;
using Aqnkla.Domain.ExceptionAqnkla;
using Aqnkla.Repository.MongoDb.Context;
using Aqnkla.Repository.MongoDb.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aqnkla.Repository.MongoDb.Base
{
    public class MongoDbRepository<T> : IRepository<T, ObjectId> where T : BaseEntity<ObjectId>
    {
        protected IMongoCollection<T> Collection { get; private set; }

        public MongoDbRepository(IOptions<MongoDbSettings> options)
        {
            var context = new BaseMongoContext<T>(options);
            Collection = context.MongoCollection;
        }

        public async Task AddAsync(T value)
        {
            await Collection.InsertOneAsync(value).ConfigureAwait(false);
        }

        public async Task DelateAsync(ObjectId id)
        {
            await Collection.DeleteOneAsync(b => b.Id == id).ConfigureAwait(false);
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await Collection.AsQueryable().ToListAsync().ConfigureAwait(false);
        }

        public async Task<T> GetAsync(ObjectId id)
        {
            var value = await Collection.FindAsync(b => b.Id == id).ConfigureAwait(false);

            return await value.FirstOrDefaultAsync().ConfigureAwait(false);
        }

        public async Task<T> UpdateAsync(ObjectId id, T value)
        {
            if (value == null)
            {
                throw new AqnklaNullException("Error Update Null Object");
            }
            value.Id = id;
            await Collection.ReplaceOneAsync(b => b.Id == id, value).ConfigureAwait(false);
            return await GetAsync(id).ConfigureAwait(false);
        }
    }
}
