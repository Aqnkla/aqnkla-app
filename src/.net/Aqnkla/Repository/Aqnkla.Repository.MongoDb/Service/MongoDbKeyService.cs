using Aqnkla.Domain.Key.Service;
using MongoDB.Bson;

namespace Aqnkla.Repository.MongoDb.Service
{
    public class MongoDbKeyService : IKeyService<ObjectId>
    {
        public string GetKeyString(ObjectId key)
        {
            return key.ToString();
        }

        public ObjectId ParseKey(string keyString)
        {
            return new ObjectId(keyString);
        }
    }
}
