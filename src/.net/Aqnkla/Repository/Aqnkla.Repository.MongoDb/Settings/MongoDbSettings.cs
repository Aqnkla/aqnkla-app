using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Repository.MongoDb.Settings
{
    public class MongoDbSettings
    {
        public string DataBasePrefix { get; set; }
        public string ConnectionsString { get; set; }
    }
}
