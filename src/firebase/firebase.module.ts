import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SlackMessageClient } from 'src/api/slack/slack-api';
import { ZapierWebhookClient } from 'src/api/zapier/zapier-webhook-client';
import { CourseUserService } from 'src/course-user/course-user.service';
import { CrispService } from 'src/crisp/crisp.service';
import { CourseUserEntity } from 'src/entities/course-user.entity';
import { EventLogEntity } from 'src/entities/event-log.entity';
import { PartnerAccessEntity } from 'src/entities/partner-access.entity';
import { PartnerAdminEntity } from 'src/entities/partner-admin.entity';
import { PartnerEntity } from 'src/entities/partner.entity';
import { SubscriptionUserEntity } from 'src/entities/subscription-user.entity';
import { SubscriptionEntity } from 'src/entities/subscription.entity';
import { TherapySessionEntity } from 'src/entities/therapy-session.entity';
import { UserEntity } from 'src/entities/user.entity';
import { EventLoggerService } from 'src/event-logger/event-logger.service';
import { PartnerService } from 'src/partner/partner.service';
import { ServiceUserProfilesService } from 'src/service-user-profiles/service-user-profiles.service';
import { SubscriptionUserService } from 'src/subscription-user/subscription-user.service';
import { SubscriptionService } from 'src/subscription/subscription.service';
import { TherapySessionService } from 'src/therapy-session/therapy-session.service';
import { PartnerAccessService } from '../partner-access/partner-access.service';
import { UserService } from '../user/user.service';
import { FIREBASE, firebaseFactory } from './firebase-factory';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      PartnerEntity,
      PartnerAccessEntity,
      CourseUserEntity,
      PartnerAdminEntity,
      SubscriptionUserEntity,
      SubscriptionEntity,
      TherapySessionEntity,
      EventLogEntity,
    ]),
  ],
  providers: [
    firebaseFactory,
    UserService,
    PartnerAccessService,
    CourseUserService,
    PartnerService,
    ServiceUserProfilesService,
    SubscriptionUserService,
    SubscriptionService,
    TherapySessionService,
    ZapierWebhookClient,
    SlackMessageClient,
    CrispService,
    EventLoggerService,
  ],
  exports: [FIREBASE],
})
export class FirebaseModule {}
