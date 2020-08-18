using Aqnkla.Authentication.JwtBearer.Provider.Extension;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MongoDB.Bson;
using Aqnkla.Repository.MongoDb.Extension;
using Aqnkla.Client.Webapi.Extension;
using Aqnkla.Domain.User.Service;
using Aqnkla.Service.User;
using Aqnkla.Domain.User.Repository;
using Aqnkla.Repository.MongoDb.User;

namespace Aqnkla.Client.Webapi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.IgnoreNullValues = true);
            services.RegisterMongoDbRepository(Configuration);
            services.RegisterUser<ObjectId>();
            services.AddJwtAuthentication<ObjectId>(Configuration);

            //services.AddSingleton<IAqnklaUserRepository<ObjectId>, MongoDbUserRepository>();
            //MongoDbUserRepository: MongoDbRepository<AqnklaUserEntity<ObjectId>>, IAqnklaUserRepository<ObjectId>
        }

        public static void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(x => x
                .SetIsOriginAllowed(origin => true)
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
