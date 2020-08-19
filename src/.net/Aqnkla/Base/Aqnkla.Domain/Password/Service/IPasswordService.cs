using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Domain.Password.Service
{
    public interface IPasswordService
    {
        string HashPassword(string password);
        bool Verify(string password, string passwordHash);
    }
}
