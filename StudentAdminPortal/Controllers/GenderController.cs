using Microsoft.AspNetCore.Mvc;
using StudentAdminPortal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdminPortal.Controllers
{
    public class GenderController : Controller
    {
        private IStudentRepository _StudentRepo;
        public GenderController(IStudentRepository studentRepo)
        {
            _StudentRepo = studentRepo;
        }
        [Route("[action]")]
        public async Task<IActionResult> GetAllGender()
        {
            return Ok(await _StudentRepo.GetAllGendersAsync());
        }
    }
}
