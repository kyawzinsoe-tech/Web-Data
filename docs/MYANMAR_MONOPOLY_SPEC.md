# Myanmar Monopoly — Project Specification

## Confirmed decisions

- Default game name: Myanmar Monopoly (editable through the Admin Dashboard).
- Players: 2–6, supporting human and AI participants.
- Starting money: 50,000 MMK per player (editable through the Admin Dashboard).
- Languages: Myanmar and English.
- Board: a Myanmar-themed, 40-space Monopoly-style board.
- Board-layout planning will be finalized first, including the missing eighth property group and the final 24-property structure.
- Eighth property group locations: မရမ်းကုန်, ရွှေတောင်ကြား, and သုဝဏ္ဏ (ဗိုလ်ချုပ်ရွာ). The group name, color, and final board positions are not yet confirmed.
- Property structure: retain 24 standard properties arranged as eight groups of three.
- Special-tile allocation for the 40-space board: 4 corner spaces (စတင်နေရာ, အကျဉ်းစခန်း, အခမဲ့နားနေရာ, အကျဉ်းစခန်းသို့သွားပါ); 4 သယ်ယူပို့ဆောင်ရေး spaces; 2 အများပြည်သူသုံးဝန်ဆောင်မှု spaces; 2 ကံ spaces; 2 ပဟေဠိ spaces; and 2 tax spaces, named ပြည်တွင်းခွန် and ကုန်သွယ်ခွန်.
- Confirmed property-group order: Northern; Upper Central; Beach & Islands; Bago Region; Central; Upper Myanmar; Shan / Highland; then the group containing မရမ်းကုန်, ရွှေတောင်ကြား, and သုဝဏ္ဏ (ဗိုလ်ချုပ်ရွာ).
- Visual direction: use the supplied Myanmar traditional board reference as the design language—deep green field, gold ornamental borders, red-gold title plaque, Myanmar cultural scenery, and richly framed board spaces.
- Cards: use a 4:3 aspect ratio. Card artwork/design must be replaceable from the Admin Dashboard without source-code changes.
- Board text: all text displayed within the board must use Myanmar Unicode; do not use Zawgyi encoding.
- Board-language default: show all board-space names and labels in Myanmar Unicode. Store an English equivalent for every user-facing game string as editable translation data; players can switch the interface language, and administrators can edit both language versions in the Dashboard.
- Dashboard property controls: administrators can change every city/property display name, property-group name, group color, and visual design from the Dashboard. These changes must update the board without source-code changes.
- Sponsor controls: all names, colors, board designs, property designs, and card designs are sponsor-customizable through the Admin Dashboard. The ကံ and ပဟေဠိ cards must each support sponsor-specific 4:3 artwork, colors, and bilingual copy.
- Player experience: follow a Richup-inspired multiplayer entry flow, without copying its branding, artwork, copy, or code. The landing page provides a nickname field, a primary public-play action, an all-rooms directory, and a create-private-game action. A player joins a game room/lobby before play begins; account login may remain optional.
- Multiplayer: public rooms are real-time online multiplayer from the first release. The server must be authoritative for room state, player turns, dice outcomes, balances, ownership, and game actions, so clients cannot control results.
- Private rooms: provide both a shareable invitation link and a short six-character room code. Keep private rooms out of the public room list. The host can remove players, add AI players, edit room settings, start the game, and lock entry after the room is full or the game begins. A future Dashboard option may enable room passwords.
- Lobby start: the host must press a prominent ဂိမ်းစတင်မည် button to begin. Show an animated confirmation popup before game start and play a sound notification. Support mute and reduced-motion preferences.
- Host continuity: if the host disconnects before a game begins, automatically transfer host controls to another player in the room.
- Mid-game disconnection: when a player disconnects, immediately hand control of that player to AI. Keep the player's original display name and append “AI” (for example, “မောင်မောင် AI”) so all players can see the status. Show an in-game notification when the handoff occurs.
- Reconnection: when a player returns, show a popup that lets them choose either to keep AI playing or to reclaim control. If they reclaim it, hand control back at their next turn so the current action is not interrupted.
- Deployment plan: begin on a free provider subdomain for development and early testing; later attach a purchased custom domain without changing the application. Hosting and domain-registration providers remain to be chosen.
- Default ruleset: classic Monopoly-style rules. This includes turn order, dice movement, property purchases, rent collection, color-group ownership, houses/hotels, rail/transport and utility rules, Chance/Community cards, tax, jail, auctions, mortgages, trading, bankruptcy, and the standard last-solvent-player win condition. All values and rule options must be configurable from the Admin Dashboard.
- Turn timeout: each online turn lasts 60 seconds by default. If time expires, AI completes that turn; the duration and timeout behavior are Game Flow settings.
- Rules preview: provide a pre-game Rules screen so players can review the active rules before joining or starting a game. Its Myanmar translations will be reviewed after core game development is complete.

## Not yet confirmed

- The name, color, and board positions for the eighth property group.
- Final prices, rents, card copy, multiplayer, and backend choice.
- Exact board positions for the 24-property, 40-space board.
- Exact Myanmar display wording for the game title, Rules screen, and other player-facing translations. Translation review begins only after core game development is complete.

## Admin Dashboard

The Admin Dashboard is split into two top-level areas.

### Game Design

Visual and sponsor-facing configuration: game title and logo, board layout appearance, theme colors, fonts, backgrounds, property names and colors, 4:3 card art and card colors, advertisements, dice theme, and the six starting player-token icons.

### Game Flow

Gameplay configuration: starting money (for example, 50,000 MMK or 100,000 MMK), purchase prices, rent levels, house and hotel costs, tax amounts, active rules, cards and effects, player/AI limits, turn timer, timeout behavior, jail, mortgage, auction, trading, bankruptcy, and room-flow settings.

## Security requirements

- Treat the server as authoritative for every multiplayer game state change and random result.
- Protect Dashboard write operations with authenticated, role-based server-side authorization.
- Keep database and storage credentials, API keys, and administrator secrets out of browser code and source control; use environment secrets.
- Validate every Dashboard input and uploaded asset; enforce file type, size, and access restrictions.
- Validate every player action server-side, rate-limit abuse-prone endpoints, and retain an audit trail of Dashboard changes.

## Decision log

| Date | Decision |
| --- | --- |
| 2026-09-19 | Finalize the board layout before resolving other open game rules. |
| 2026-09-19 | Adopted the supplied Myanmar traditional board as the visual reference; cards are customizable 4:3 assets; board text uses Myanmar Unicode only. |
| 2026-09-19 | Selected the three locations for the eighth property group: မရမ်းကုန်, ရွှေတောင်ကြား, and သုဝဏ္ဏ (ဗိုလ်ချုပ်ရွာ). |
| 2026-09-19 | City names, group names, colors, and visual designs must be editable from the Dashboard. |
| 2026-09-19 | Use classic Monopoly-style gameplay as the default ruleset; expose its rules, amounts, cards, and tile settings through the Dashboard. |
| 2026-09-19 | Retain the 24-property structure: eight property groups of three. |
| 2026-09-19 | Default board labels use Myanmar Unicode; maintain editable English and Myanmar translations for all user-facing content. |
| 2026-09-19 | Confirmed the 16 special-tile allocation, with default Myanmar names for ကံ, ပဟေဠိ, ပြည်တွင်းခွန်, and ကုန်သွယ်ခွန်. |
| 2026-09-19 | Confirmed the property-group order and made all board/card visual and naming elements sponsor-editable through the Dashboard. |
| 2026-09-19 | Adopt a Richup-inspired player entry, public-room, and private-room flow; use it as UX reference only, with original Myanmar Monopoly branding and sponsor-customizable content. |
| 2026-09-19 | Start with a free subdomain and migrate to a purchased custom domain later. |
| 2026-09-19 | Include real-time online multiplayer in public rooms from the first release. |
| 2026-09-19 | Private rooms use shareable links and six-character room codes, with host controls and entry locking. |
| 2026-09-19 | Only the host starts the game using an animated confirmation popup and an audible notification. |
| 2026-09-19 | Automatically transfer host controls when the original host disconnects. |
| 2026-09-19 | A disconnected player is immediately replaced by AI; append “AI” to their displayed name. |
| 2026-09-19 | A returning player chooses whether to keep AI or reclaim control at their next turn. |
| 2026-09-19 | Use a 60-second online turn timer; if it expires, AI completes that turn. Show active rules before a game starts, and begin Myanmar translation review after core development. |
| 2026-09-19 | Split the Admin Dashboard into Game Design and Game Flow, and treat security as a core requirement. |
