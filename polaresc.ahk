#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

#SingleInstance force

RunScript := false
MyNum := 0
x1 := 0
y1 := 0
x2 := 0
y2 := 0

`::
if WinExist("Firestone")
{
  WinActivate
  WinGetPos, Xpos, Ypos, Width, Height

  ; click middle of the screen
  x1 := Width
  x1 *= 0.42
  y1 := Height
  y1 *= 0.30

  ; click special upgrade
  x2 := Width
  x2 *= 0.92
  y2 := Height
  y2 *= 0.2
}
else
{
  return
}
RunScript := true
Loop
{
  if (RunScript == true)
  {
    if (MyNum < 8)
    {
      Click, %x1%, %y1%
      MyNum := MyNum + 1
    }
    else
    {
      Click, %x2%, %y2%
      Send u
      MyNum := 0
    }
    Sleep 120
    Send 3
  }
  else
  {
    break
  }
}
return

=::
  RunScript := false
return