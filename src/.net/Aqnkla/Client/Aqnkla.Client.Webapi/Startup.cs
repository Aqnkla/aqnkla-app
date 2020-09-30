using Aqnkla.Authentication.Password.BCrypt.Extension;
using Aqnkla.Client.Webapi.Extensions;
using Aqnkla.Mail.MailKit.Extensions;
using Aqnkla.Repository.MongoDb.Extension;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Bson;

namespace Aqnkla.Client.Webapi
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // add services to the DI container
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddDomainObjects<ObjectId>();
            services.AddFoodObjects<ObjectId>();
            //services.AddJwtAuthentication<ObjectId>(Configuration);
            services.AddBCryptPassword();
            services.AddMailMailKit(Configuration);
            services.RegisterMongoDbBase(Configuration);
            services.RegisterMongoDbUser();
            services.RegisterMongoDbFood();
            services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.IgnoreNullValues = true);
        }

        // configure the HTTP request pipeline
        public static void Configure(IApplicationBuilder app)
        {
            app.UseRouting();
            app.UseCors(x => x
                //.SetIsOriginAllowed(origin => true)
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowAnyOrigin()
                //.AllowCredentials()
                );

            //app.UseMiddleware<ErrorHandlerMiddleware>();

            //app.UseMiddleware<JwtMiddleware>();

            app.UseEndpoints(x => x.MapControllers());
        }
    }
}
