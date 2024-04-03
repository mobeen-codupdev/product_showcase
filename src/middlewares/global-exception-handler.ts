import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common'
import * as Sentry from '@sentry/node'

@Catch()
export class GlobalException implements ExceptionFilter {
    private readonly logger = new Logger(GlobalException.name)

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()

        this.logger.error(exception.message)

        // Capture the exception with Sentry
        Sentry.captureException(exception)
        response.status(500).json({
            statusCode: 500,
            success: false,
            message: 'something went wrong!',
            error: exception.message,
        })
    }
}
