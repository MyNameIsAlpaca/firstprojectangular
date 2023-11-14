export class Employee
{
    enrollment: string
    Name: string
    City: string
    Address: string

    constructor(enroll: string, nm: string, ct: string, adr: string)
    {
        this.enrollment = enroll
        this.Name = nm
        this.City = ct
        this.Address = adr
    }
}