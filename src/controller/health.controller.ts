import { Controller, Get } from '@nestjs/common';

//

@Controller('health')
export class HealthController {
  /**
   * Health check endpoint used by Kubernetes probes to monitor the application status.
   *
   * This endpoint is used for:
   * - Liveness Probe: To check if the application is alive and should be restarted if not responding.
   * - Readiness Probe: To verify if the application is ready to receive traffic.
   *
   * Returns a simple status object with HTTP 200 status code when the app is healthy.
   *
   * @returns {Object} JSON object indicating the health status of the app.
   */
  @Get()
  getHealth() {
    return {
      status: 'ok',
      message: 'Service is running smoothly',
      timestamp: new Date().toISOString(),
    };
  }
}
