using Aqnkla.Food.Ingredient.Entity.Category;
using Aqnkla.Food.Ingredient.Repository;
using Aqnkla.Repository.MongoDb.Base;
using Aqnkla.Repository.MongoDb.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Repository.MongoDb.Modules.Food.Category
{
    public class MongoDbIngredientCategoryRepository : MongoDbRepository<IngredientCategoryEntity<ObjectId>>, IIngredientCategoryRepository<ObjectId>
    {
        public MongoDbIngredientCategoryRepository(IOptions<MongoDbSettings> options) : base(options)
        {

        }
    }
}
