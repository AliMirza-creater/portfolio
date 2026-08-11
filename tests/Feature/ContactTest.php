<?php

use App\Mail\ContactMessage;
use Illuminate\Support\Facades\Mail;

test('contact form validates required fields', function () {
    $this->post(route('contact.send'), [])
        ->assertSessionHasErrors(['name', 'email', 'subject', 'message']);
});

test('contact form submits a message', function () {
    Mail::fake();

    $this->from('/')
        ->post(route('contact.send'), [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'subject' => 'Project inquiry',
            'message' => 'I would love to discuss a project with you.',
        ])
        ->assertRedirect('/')
        ->assertSessionHasNoErrors();

    Mail::assertSent(ContactMessage::class, function (ContactMessage $mail) {
        return $mail->hasTo(config('mail.from.address'))
            && $mail->data['email'] === 'jane@example.com'
            && $mail->data['subject'] === 'Project inquiry';
    });
});

test('contact form rejects an invalid email', function () {
    $this->post(route('contact.send'), [
        'name' => 'Jane Doe',
        'email' => 'not-an-email',
        'subject' => 'Project inquiry',
        'message' => 'Hello there.',
    ])->assertSessionHasErrors('email');
});
