#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
#SingleInstance force

; Hotkeys on keyboard:
; --------------------
; A: Alchemist
; B: Bag
; C: Character menu
; E: Temple of Eternals
; G: Guardian menu (magic quarter)
; H: Hall of Heroes
; L: Library
; M: Map
; P: Party
; Q: Quests
; S: Settings
; T: Town
; U: Upgrades
; X: Exotic Merchant

;----------------------------------------------------------
; Title of your game window (change if website)
;----------------------------------------------------------
WindowTitle := "Firestone"
; use this title if playing on chrome / kongregate
;WindowTitle := "Play Firestone Idle RPG, a free online game on Kongregate - Google Chrome"

RunScript := false
MyNum := 0
Counter := 0
Max_Cycles := 150

; middle of screen (path for beer dragon and meteor guy)
x1 := 0
y1 := 0

; close button (full screen window)
x_close_full := 0
y_close_full := 0

; special upgrade
x_upgrade := 0
y_upgrade := 0

; train guardian (magic quarter)
x_train := 0
y_train := 0

; guild button on main page
x_guild := 0
y_guild := 0

; guild shop
x_guild_shop := 0
y_guild_shop := 0

; guild shop supplies
x_guild_shop_supplies := 0
y_guild_shop_supplies := 0

; guild shop pickaxes
x_guild_shop_pickaxes := 0
y_guild_shop_pickaxes := 0

; guild expedition button
x_exped := 0
y_exped := 0

; campaign button on map
x_campaign := 0
y_campaign := 0

; claim campaign award button
x_campaign_claim := 0
y_campaign_claim := 0

;----------------------------------------------------------
; Activate when user presses ` key (backtick)
;----------------------------------------------------------
`::
RunScript := true
Counter := Floor(Max_Cycles / 2) ; keep track of how many cycles we've done

if WinExist(WindowTitle)
{
  ;----------------------------
  ; environment variables
  ;----------------------------

  WinActivate
  WinGetPos, Xpos, Ypos, wide, high

  ; middle of the screen (beer dragon and meteor guy path)
  x1 := Floor(wide * 0.42)
  y1 := Floor(high * 0.30)

  ; normal close button
  x_close_full := Floor(wide * 0.958)
  y_close_full := Floor(high * 0.052)

  ; special upgrade button
  x_upgrade := Floor(wide * 0.92)
  y_upgrade := Floor(high * 0.2)

  ; train guardian (magic quarter)
  x_train := Floor(wide * 0.60)
  y_train := Floor(high * 0.73)

  ; guild button on main screen
  x_guild := Floor(wide * 0.96)
  y_guild := Floor(high * 0.43)

  ; guild shop
  x_guild_shop := Floor(wide * 0.325)
  y_guild_shop := Floor(high * 0.237)

  ; guild shop supplies
  x_guild_shop_supplies := Floor(wide * 0.091)
  y_guild_shop_supplies := Floor(high * 0.722)

  ; guild shop pickaxes
  x_guild_shop_pickaxes := Floor(wide * 0.367)
  y_guild_shop_pickaxes := Floor(high * 0.444)

  ; expedition tent in guild screen
  x_exped := Floor(wide * 0.14)
  y_exped := Floor(high * 0.35)

  ; expedition button complete/start
  x_exped_button := Floor(wide * 0.69)
  y_exped_button := Floor(high * 0.30)

  ; campaign button on the map
  x_campaign := Floor(wide * 0.96)
  y_campaign := Floor(high * 0.57)

  ; campaign button on the map
  x_campaign_claim := Floor(wide * 0.11) ;210
  y_campaign_claim := Floor(high * 0.91) ;986
}
else
{
  ;----------------------------
  ; send ` if game not running
  ;----------------------------
  Send {`}
  return
}

;----------------------------
; Main loop that runs clicker
;----------------------------
Loop
{
  if (RunScript == false)
    break

  if (MyNum < 8)
  {
    ; click middle of screen
    Click, %x1%, %y1%
    MyNum := MyNum + 1
  }
  else
  {
    ; click special upgrade button
    Click, %x_upgrade%, %y_upgrade%
    Send {U}
    MyNum := 0
  }
  Sleep 120
  Send {3}

  if (Counter > Max_Cycles)
  {
    ;----------------------------
    ; do the extra stuff
    ;----------------------------
    Counter := 0

    ; open guardian screen and click upgrade
    Send {G}
    Sleep 200
    Click, %x_train%, %y_train%
    Sleep 200
    Click, %x_close_full%, %y_close_full%
    Sleep 200

    if (RunScript == false)
      break

    ; open guild screen for expedition and pickaxes
    Click, %x_guild%, %y_guild%
    Sleep 200
    Click, %x_exped%, %y_exped%
    Sleep 200
    Click, %x_exped_button%, %y_exped_button%
    Sleep 200
    Click, %x_exped_button%, %y_exped_button%
    Sleep 200
	; just click off the window, position doesn't matter
    Click, %x_upgrade%, %y_upgrade%
    Sleep 200
	; now open the shop and get pickaxes
    Click, %x_guild_shop%, %y_guild_shop%
    Sleep 200
    Click, %x_guild_shop_supplies%, %y_guild_shop_supplies%
    Sleep 200
    Click, %x_guild_shop_pickaxes%, %y_guild_shop_pickaxes%
    Sleep 200
	; close twice to get out of guild shop and guild screen
    Click, %x_close_full%, %y_close_full%
    Sleep 200
    Click, %x_close_full%, %y_close_full%
    Sleep 200

    if (RunScript == false)
      break

    ; open map and click free stuff button
    Send {M}
    Sleep 200
    Click, %x_campaign%, %y_campaign%
    Sleep 200
    Click, %x_campaign_claim%, %y_campaign_claim%
    Sleep 200
    Click, %x_campaign_claim%, %y_campaign_claim%
    Sleep 200
    Click, %x_close_full%, %y_close_full%
    Sleep 200
  }
  else
  {
    ; keep counting
    Counter += 1
  }
}
return

;----------------------------------------------------------
; Stop when user presses = key (equals)
;----------------------------------------------------------
=::
if WinExist(WindowTitle)
{
  ;----------------------------
  ; stop the main clicker loop
  ;----------------------------
  RunScript := false
}
else
{
  ;----------------------------
  ; send = if game not running
  ;----------------------------
  Send {=}
}
return
