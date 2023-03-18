using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdminPortal.ViewModel
{
    public class updateStudentVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public string Email { get; set; }
        public string Contact { get; set; }
        public string ProfileImage { get; set; }
        public int GenderId { get; set; }
        public string physicalAddress { get; set; }
        public string PostalAddress { get; set; }
    }
}
