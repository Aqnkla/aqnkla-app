using Aqnkla.Authentication.JwtBearer.Provider.Extension;
using Aqnkla.Authentication.JwtBearer.Provider.Middleware;
using Aqnkla.Authentication.Password.BCrypt.Extension;
using Aqnkla.Client.Webapi.Extensions;
using Aqnkla.Client.Webapi.Helpers;
using Aqnkla.Mail.MailKit.Extensions;
using Aqnkla.Repository.MongoDb.Extension;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Bson;
using System;

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
            services.AddJwtAuthentication<ObjectId>(Configuration);
            services.AddBCryptPassword();
            services.AddMailMailKit(Configuration);
            services.RegisterMongoDbRepository(Configuration);
            services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.IgnoreNullValues = true);
        }

        // configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseRouting();
            app.UseCors(x => x
                .SetIsOriginAllowed(origin => true)
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            app.UseMiddleware<ErrorHandlerMiddleware>();

            app.UseMiddleware<JwtMiddleware>();

            app.UseEndpoints(x => x.MapControllers());
        }
    }
}
