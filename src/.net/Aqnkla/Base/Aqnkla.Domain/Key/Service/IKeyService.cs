using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Domain.Key.Service
{
   public interface IKeyService<TKey>
    {
        TKey ParseKey(string keyString);

        string GetKeyString(TKey key);
    }
}
