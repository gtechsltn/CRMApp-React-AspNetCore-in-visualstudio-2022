using MongoDB.Driver;

namespace CRMAppReactAspnetcore.Server.Models
{
    public interface IMongoDbContext
    {
        IMongoCollection<T> GetCollection<T>(string name);
    }
}
