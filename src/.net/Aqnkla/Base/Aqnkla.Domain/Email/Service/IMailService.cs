using Aqnkla.Domain.Email.Model;
using System.Threading.Tasks;

namespace Aqnkla.Domain.Email.Service
{
    public interface IMailService
    {
        Task<bool> SendAsync(SendModel model);
    }
}
