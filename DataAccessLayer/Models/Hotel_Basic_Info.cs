using System;
using System.ComponentModel.DataAnnotations.Schema;
using DataAccessLayer.RelationTables;

namespace DataAccessLayer.Models
{
    [Table("TB_Hotel_Basic_Info")]
    public class Hotel_Basic_Info
    {
        public long Id { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Info_ID { get; set; }
        [Column(TypeName = "varchar(200)")]
        public string Name { get; set; }
        public int Star_Nature_ID { get; set; }
        public int Province_ID { get; set; }
        public int District_ID { get; set; }
        public int Avg_Night { get; set; }
        [Column(TypeName = "varchar(5000)")]
        public string Description { get; set; }
        [Column(TypeName = "varchar(500)")]
        public string Address { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Email_ID { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Phone_Number { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Mobile_Number { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Fax_Number { get; set; }
        [Column(TypeName = "varchar(50)")]
        public string Status { get; set; }
        [Column(TypeName = "varchar(50)")]
        public string Type { get; set; }
        public DateTime CreateAt { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Dpt_User_ID { get; set; }
        //public ApplicationUser User { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Website { get; set; }
        [Column(TypeName = "varchar(20)")]
        public int Price { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Longitude { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Latitude { get; set; }
    }
    }
