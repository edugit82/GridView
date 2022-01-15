using Microsoft.AspNetCore.Mvc;

namespace GridView.Controllers
{
    public class TableController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
