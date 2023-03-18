using Microsoft.EntityFrameworkCore;
using StudentAdminPortal.Data;
using StudentAdminPortal.Models;
using StudentAdminPortal.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdminPortal.Repository
{
    public class StudentRepository : IStudentRepository
    {
        private readonly ApplicationDbContext _context;
        public StudentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> Exists(int id)
        {
            return await _context.Students.AnyAsync(x=>x.Id==id);
        }

        public async Task<List<Gender>> GetAllGendersAsync()
        {
            return await _context.Genders
                .ToListAsync();
        }

        public async Task<List<Student>> GetAllStudentsAsync()
        {
            return await _context.Students.Include(nameof(Gender)).Include(nameof(Address))
                .ToListAsync();
        }

        public async Task<Student> GetStudentAsync(int id)
        {
           return await _context.Students.Where(x=>x.Id==id).Include(nameof(Gender)).Include(nameof(Address))
                .FirstOrDefaultAsync();
        }

        public async Task<Student> studentUpdate(int id, updateStudentVM student)
        {
            var studentFromDb = await _context.Students.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (studentFromDb!=null) {
                studentFromDb.Name = student.Name;
                studentFromDb.Email = student.Email;
                studentFromDb.BirthDate = student.BirthDate;
                studentFromDb.GenderId = student.GenderId;
                studentFromDb.Address.physicalAddress = student.physicalAddress;
                studentFromDb.Address.PostalAddress = student.PostalAddress;
                studentFromDb.Contact = student.Contact;
                await _context.SaveChangesAsync();
                return studentFromDb;
            }
            return null;

        }
    }
}
