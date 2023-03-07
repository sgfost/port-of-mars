import { Router, Request, Response } from "express";
import { getServices } from "@port-of-mars/server/services";
import { User } from "@port-of-mars/server/entity/User";

export const leaderboardRouter = Router();

leaderboardRouter.get("/", async (req: Request, res: Response, next) => {
  try {
    const withoutBots = await getServices().leaderboard.getLeaderboardWithoutBots();
    const withBots = await getServices().leaderboard.getLeaderboardWithBots();
    res.json({ withoutBots, withBots });
  } catch (e) {
    next(e);
  }
});

leaderboardRouter.get("/stats", async (req: Request, res: Response, next) => {
  try {
    const user = req.user as User;
    const round = await getServices().tournament.getCurrentTournamentRound();
    const stats = await getServices().leaderboard.getStats(user, round);
    res.json(stats);
  } catch (e) {
    next(e);
  }
});
