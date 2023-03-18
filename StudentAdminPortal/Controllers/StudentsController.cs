using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentAdminPortal.Models;
using StudentAdminPortal.Repository;
using StudentAdminPortal.ViewModel;
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
        public async Task<IActionResult> GetAllStudent()
        {
            return Ok(await _StudentRepo.GetAllStudentsAsync());
        }

        [Route("[action]/{id:int}")]
        public async Task<IActionResult> getStudent(int id) {
            return Ok(await _StudentRepo.GetStudentAsync( id));
        }

        [HttpPut]
        [Route("[action]/{id:int}")]
        public async Task<IActionResult> updateStudent([FromRoute] int id , [FromBody]updateStudentVM  student)
        {
            if (await _StudentRepo.Exists(id)) {
                var updateStudent = _StudentRepo.studentUpdate(id, student);
                if (updateStudent != null) {
                    return Ok(updateStudent);
                }
            }

            return NotFound();
        }

        [HttpDelete]
        [Route("[action]/{id:int}")]
        public async Task<IActionResult> deleteStudent([FromRoute] int Id)
        {
            if (await _StudentRepo.Exists(Id))
            {
                var student =await _StudentRepo.studentDelete(Id);
                return Ok(student);
            }

            return NotFound();
        }

    }
}
