﻿using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Domain.Email.Model;
using Aqnkla.Domain.Email.Service;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.EmailSender
{
    public class JwtEmailSenderService<TKey> : IJwtEmailSenderService<TKey>
    {
        private readonly IMailService emailService;

        public JwtEmailSenderService(
            IMailService emailService)
        {
            this.emailService = emailService;
        }

        public void SendVerificationEmail(JwtUserEntity<TKey> account, string origin)
        {
            string message;
            if (!string.IsNullOrEmpty(origin))
            {
                var verifyUrl = $"{origin}/account/verify-email?token={account.VerificationToken}";
                message = $@"<p>Please click the below link to verify your email address:</p>
                             <p><a href=""{verifyUrl}"">{verifyUrl}</a></p>";
            }
            else
            {
                message = $@"<p>Please use the below token to verify your email address with the <code>/accounts/verify-email</code> API route:</p>
                             <p><code>{account.VerificationToken}</code></p>";
            }

            emailService.SendAsync(
                new SendModel
                {
                    ToAddress = account.Email,
                    HtmlContent = $@"<h4>Verify Email</h4>
                         <p>Thanks for registering!</p>
                         {message}",
                    Subject = "Sign-up Verification API - Verify Email"
                });
        }

        public void SendAlreadyRegisteredEmail(string email, string origin)
        {
            string message;
            if (!string.IsNullOrEmpty(origin))
                message = $@"<p>If you don't know your password please visit the <a href=""{origin}/account/forgot-password"">forgot password</a> page.</p>";
            else
                message = "<p>If you don't know your password you can reset it via the <code>/accounts/forgot-password</code> API route.</p>";

            emailService.SendAsync(
                new SendModel
                {
                    ToAddress = email,
                    Subject = "Sign-up Verification API - Email Already Registered",
                    HtmlContent = $@"<h4>Email Already Registered</h4>
                         <p>Your email <strong>{email}</strong> is already registered.</p>
                         {message}"
                }
            );
        }

        public void SendPasswordResetEmail(JwtUserEntity<TKey> account, string origin)
        {
            string message;
            if (!string.IsNullOrEmpty(origin))
            {
                var resetUrl = $"{origin}/account/reset-password?token={account.ResetToken}";
                message = $@"<p>Please click the below link to reset your password, the link will be valid for 1 day:</p>
                             <p><a href=""{resetUrl}"">{resetUrl}</a></p>";
            }
            else
            {
                message = $@"<p>Please use the below token to reset your password with the <code>/accounts/reset-password</code> API route:</p>
                             <p><code>{account.ResetToken}</code></p>";
            }

            emailService.SendAsync(
                new SendModel
                {
                    ToAddress = account.Email,
                    HtmlContent = $@"<h4>Reset Password Email</h4>
                         {message}",
                    Subject = "Sign-up Verification API - Reset Password"
                }
            );
        }
    }
}
