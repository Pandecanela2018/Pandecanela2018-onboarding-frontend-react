# answer

Why is it useful to create a reusable Axios instance?
It is useful for reusing code and when you need to change something, you dont need to re write everything again.
Just change the instance

How does intercepting requests help with authentication?
Request interception is important because it allows you to automatically attach authentication data, such as tokens, to every request.

What happens if an API request times out, and how can you handle it?
When a request times out, Axios stops waiting for the response, so the request is cancelled.
You can handle this by catching the error and showing a proper message or retrying the request.
