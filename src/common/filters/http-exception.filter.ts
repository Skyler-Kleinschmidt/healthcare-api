import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

// Custom exception filter to handle HTTP exceptions globally
@Catch(HttpException) // Catches all instances of HttpException
export class HttpExceptionFilter implements ExceptionFilter {
  // The catch method is triggered when an exception is thrown
  catch(exception: HttpException, host: ArgumentsHost) {
      // Accessing the HTTP request and response objects
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      
      // Get the status code from the exception
      const status = exception.getStatus();

      // Define the structure of the error response
      const errorResponse = {
          statusCode: status, // HTTP status code (e.g., 404, 500)
          timestamp: new Date().toISOString(), // Time of the error
          path: request.url, // URL path of the request
          message: exception.message, // Error message from the exception
      };

      // Send the error response to the client
      response.status(status).json(errorResponse);
  }
}
