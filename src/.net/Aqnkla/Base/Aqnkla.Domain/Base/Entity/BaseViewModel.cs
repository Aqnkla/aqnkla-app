using Aqnkla.Domain.Attributes;

namespace Aqnkla.Domain.Base.Entity
{
    [ExportViewModel]
    public abstract class BaseViewModel
    {
        public string Id { get; set; }
    }
}
