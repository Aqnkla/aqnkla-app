﻿namespace Aqnkla.Domain.Email.Model
{
    public class SendModel
    {
        public string ToAddress { get; set; }
        public string FromAddress { get; set; }
        public string Subject { get; set; }
        public string HtmlContent { get; set; }
    }
}
