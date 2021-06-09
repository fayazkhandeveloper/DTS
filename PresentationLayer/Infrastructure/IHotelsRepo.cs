using System;
using System.Collections.Generic;
using DataAccessLayer.Models;

namespace PresentationLayer.Infrastructure
{
    public interface IHotelsRepo
    {
        List<Hotel_Basic_Info> Hotel_Basic_s();
    }
}
