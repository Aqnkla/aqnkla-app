using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using AutoMapper;

namespace Aqnkla.Authentication.JwtBearer.Provider.Helpers
{
    public class AutoMapperProfile<TKey> : Profile
    {
        // mappings between model and entity objects
        public AutoMapperProfile()
        {
            CreateMap<JwtUserEntity<TKey>, AccountResponse>();

            CreateMap<JwtUserEntity<TKey>, AuthenticateResponse>();

            CreateMap<RegisterRequest, JwtUserEntity<TKey>>();

            CreateMap<CreateRequest, JwtUserEntity<TKey>>();

            CreateMap<UpdateRequest, JwtUserEntity<TKey>>()
                .ForAllMembers(x => x.Condition(
                    (src, dest, prop) =>
                    {
                        // ignore null & empty string properties
                        if (prop == null) return false;
                        if (prop.GetType() == typeof(string) && string.IsNullOrEmpty((string)prop)) return false;

                        // ignore null role
                        if (x.DestinationMember.Name == "Role" && src.Role == null) return false;

                        return true;
                    }
                ));
        }
    }
}