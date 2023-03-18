using StudentAdminPortal.Models;
using StudentAdminPortal.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdminPortal.Repository
{
    public interface IStudentRepository
    {
        Task<List<Student>> GetAllStudentsAsync();
        Task<Student> GetStudentAsync(int id);
        Task<bool> Exists(int id);
        Task<List<Gender>> GetAllGendersAsync();
        Task<Student> studentUpdate(int id, updateStudentVM student);
    }
}
