// GET /crisis -- the crisis line.
//
// Staffed around the clock, in the sense that this function is deployed.
// The response is deterministic because a crisis line should be something
// you can rely on.

const TRANSCRIPT = `MERGE CONFLICT COUNSELLING -- CRISIS LINE

You have reached a counsellor. You are not on hold. There is no hold.

You are in a detached HEAD state. This is a state, not a verdict.
Do not close the terminal. Do not run anything with --force.

First, breathe. Detachment is survivable. Every commit you make here
is real; it is just not attached to anything that loves it yet.

When you are ready:

    git checkout -b somewhere-safe

You are now on a named branch. Everything you did while detached came
with you. Nothing is lost.

If you had already made commits and switched away, they are not gone
either:

    git reflog

The reflog remembers everything. It is the only one of us that does.

This line is staffed around the clock. There is no one here, and we
have never missed a call.
`;

export function onRequest() {
  return new Response(TRANSCRIPT, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      // A crisis is always current. Nothing about this response may be stale.
      "cache-control": "no-store",
    },
  });
}
