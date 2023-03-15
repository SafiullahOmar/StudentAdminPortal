using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentAdminPortal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdminPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase

    {
        private IStudentRepository _StudentRepo;
        public StudentsController(IStudentRepository studentRepo)
        {
            _StudentRepo = studentRepo;
        }
        [Route("[action]")]
        public async Task<IActionResult> GetAllStudentAsync()
        {
            return Ok(await _StudentRepo.GetAllStudentsAsync());
        }

    }
}
