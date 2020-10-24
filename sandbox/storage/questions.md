##glossary

`playbackStopped` means `playbackEnded`, as you normally only "pause"

##questions

1. You don't resend `video25` if you go over `video50` and then back to `video25`
1. If you land from a bookmark at `video50`, and so `video25` isn't set, you set `video50`. This is despite not having watched 50% this time.
1. If you use the same bookmark multiple times, the `video50`-only event can be triggered many times
1. If you land from a bookmark at `video75`, and so `video25` and `video50` isn't set, you can't set the earlier flags.
