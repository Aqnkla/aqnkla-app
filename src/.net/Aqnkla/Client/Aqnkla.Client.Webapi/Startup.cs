using Aqnkla.Authentication.JwtBearer.Core.Repository;
using Aqnkla.Authentication.JwtBearer.Provider.Extension;
using Aqnkla.Authentication.JwtBearer.Provider.Middleware;
using Aqnkla.Domain.User.Repository;
using Aqnkla.Domain.User.Service;
using Aqnkla.Repository.MongoDb.Extension;
using Aqnkla.Repository.MongoDb.Settings;
using Aqnkla.Repository.MongoDb.User;
using Aqnkla.Service.User;
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
            services.AddJwtAuthentication<ObjectId>(Configuration);
            services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.IgnoreNullValues = true);
            //services.AddSwaggerGen();







            services.AddSingleton<IAqnklaUserService<ObjectId>, AqnklaUserService<ObjectId>>();
            //MongoDbUserRepository: MongoDbRepository<AqnklaUserEntity<ObjectId>>, IAqnklaUserRepository<ObjectId>

            services.RegisterMongoDbRepository(Configuration);


            // configure strongly typed settings object
            services.Configure<MongoDbSettings>(Configuration.GetSection("MongoDbSettings"));

        }

        // configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            // generated swagger json and swagger ui middleware
            //app.UseSwagger();
            //app.UseSwaggerUI(x => x.SwaggerEndpoint("/swagger/v1/swagger.json", "ASP.NET Core Sign-up and Verification API"));

            app.UseRouting();

            // global cors policy
            app.UseCors(x => x
                .SetIsOriginAllowed(origin => true)
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            // global error handler
            app.UseMiddleware<ErrorHandlerMiddleware>();

            // custom jwt auth middleware
            app.UseMiddleware<JwtMiddleware>();

            app.UseEndpoints(x => x.MapControllers());
        }
    }
}
