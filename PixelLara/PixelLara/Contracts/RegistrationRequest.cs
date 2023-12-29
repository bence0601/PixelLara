using System.ComponentModel.DataAnnotations;

namespace PixelLara.Contracts
{
    public record RegistrationRequest(
        [Required] string Email,
        [Required] string Username,
        [Required] string Password);
}
