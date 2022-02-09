import { Router, Request, Response } from 'express';
import { getServices } from '@port-of-mars/server/services';
import { TournamentStatus } from '@port-of-mars/shared/types';

export const statusRouter = Router();

statusRouter.get('/', async (req: Request, res: Response, next) => {
  // provide tournament status + schedule
  try {
    const isSignUpEnabled = await getServices().settings.isSignUpEnabled();
    let tournamentStatus: TournamentStatus = {
      schedule: [], championship: false, round: 0,
      announcement: "",
      description: "",
    };
    if (!isSignUpEnabled) {
      tournamentStatus = await getServices().tournament.getTournamentStatus();
    }

    res.json({
      user: req.user,
      isSignUpEnabled,
      tournamentStatus,
    });
  }
  catch (e) {
    next(e);
  }
});