using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CRMAppReactAspnetcore.Server.Models
{
    public interface IUserService
    {
        Task<User> RegisterAsync(User user);
        Task<string> LoginAsync(string username, string password);
    }
    public class UserService : IUserService
    {
        private readonly IMongoCollection<User> _users;
        private readonly IConfiguration _config;
        public UserService(IMongoDbContext context, IConfiguration config)
        {
            _users = context.GetCollection<User>("Users");
            _config = config;
        }

        public async Task<User> RegisterAsync(User user)
        {
            await _users.InsertOneAsync(user);
            return user;
        }

        public async Task<string> LoginAsync(string username, string password)
        {
            var user = await _users.Find(u => u.Username == username && u.Password == password).FirstOrDefaultAsync();
            if (user == null) return null;

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_config["Jwt:Key"]);
            var claims = new List<Claim> {
    new Claim("username", user.Username),
    new Claim("role", user.Role)
};
            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1),
                signingCredentials: new SigningCredentials(
                    new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature
                ));
            return tokenHandler.WriteToken(token);
        }
    }

}
