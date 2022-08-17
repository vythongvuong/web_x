using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using web_x_backend.Model;

namespace web_x_backend.Data
{
    public interface IDataAccessProvider
    {
        void AddPatientRecord(Patient patient);
        void UpdatePatientRecord(Patient patient);
        void DeletePatientRecord(string id);
        Patient GetPatientSingleRecord(string id);
        List<Patient> GetPatientRecords();
    }
}
