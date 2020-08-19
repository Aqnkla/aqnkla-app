using Aqnkla.Domain.Email.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Aqnkla.Domain.Email.Service
{
  public  interface IMailService
    {
        Task<bool> SendAsync(SendModel model);
    }
}
