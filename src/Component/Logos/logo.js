
const logoSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNTA1LjAwMDAwMHB0IiBoZWlnaHQ9IjIzMy4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDUwNS4wMDAwMDAgMjMzLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE2LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxOQo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwyMzMuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTU1NSAyMzAxIGMtMTYgLTQgLTQzIC0xNSAtNjAgLTI0IC00MSAtMjEgLTUzOSAtNTI0IC01NTkgLTU2NCAtMjAKLTM5IC0yMSAtMTIyIC0yIC0xNjYgNyAtMTggNTcgLTc4IDEwOSAtMTMzIGw5NiAtMTAxIC01OSAtMTMgLTYwIC0xMyAwIC0zOApjMCAtNDMgLTE1IC01MSAtNjYgLTM2IC0yNCA3IC00MCA2IC02MyAtNiAtMTcgLTggLTMxIC0xMSAtMzEgLTYgMCA1IC0zNCA5Ci03NSA5IC00MyAwIC03NSAtNCAtNzUgLTEwIDAgLTUgNyAtMTAgMTUgLTEwIDEzIDAgMTUgLTIwIDE1IC0xMjQgMCAtMTEwIC0yCi0xMjUgLTE3IC0xMjkgLTEwIC0zIDI3IC01IDgyIC00IDU1IDAgOTAgMiA3OCA0IC0yMiA0IC0yMyA5IC0yMyA4OSAwIDk1IDE4CjE1NCA0NyAxNTQgMTcgLTEgMTcgLTEgMSAtMTQgLTM1IC0yNiAtMTYgLTc2IDMwIC03NiA0NCAwIDYyIDE3IDYyIDYwIDAgMjIgNAo0MCA5IDQwIDUgMCAxMSAtNTIgMTMgLTExNSAzIC0xMjggMTAgLTE0MiA3MSAtMTUyIDY0IC0xMCAxMDYgNCAxMjQgNDIgbDE2CjM1IDE4IC0yOSBjMTAgLTE3IDMzIC0zNCA1NCAtNDEgMzYgLTEyIDExNiAtOSAxNjEgNSAxOCA2IDgzIC01OSA0MzggLTQzNwoyNDIgLTI1NyA0MzIgLTQ1MSA0NTMgLTQ2MiA0MyAtMjMgMTE1IC0yNiAxNjIgLTYgMjIgOSAxNzcgMTY2IDQ0NCA0NDkgNDAzCjQyNyA0MTIgNDM2IDQ1NiA0NDMgMzMgNSA1NCAxNiA3NCAzOCAzMCAzMyAzNSA2MCAxMiA2MCAtOCAwIC0xNSAtNiAtMTUgLTEzCjAgLTE5IC00MyAtNTcgLTY0IC01NyAtMTIgMCA1IDI1IDU2IDc5IGw3MyA4MCAyOCAtOTAgMjggLTg5IDQ4IDAgNDkgMCAyMyA3MwoyMiA3MiAxOCAtNjAgYzEwIC0zMyAxOSAtNjYgMTkgLTczIDAgLTkgMTQgLTEyIDUyIC0xMCBsNTEgMyAzMyAxMjUgYzE4IDY4CjM3IDEyNiA0MyAxMjggMjcgOSA3IDIyIC0zNCAyMiAtMjUgMCAtNDUgLTQgLTQ1IC0xMCAwIC01IDkgLTEwIDE5IC0xMCAxOSAwCjE5IC0yIDEgLTcxIC0xMCAtMzkgLTIwIC03MiAtMjIgLTc0IC0yIC0yIC0xMiAyOCAtMjIgNjcgLTEzIDUxIC0xNSA3MyAtNyA3Ngo2IDIgMTEgOCAxMSAxMyAwIDUgLTM4IDkgLTg1IDkgLTc3IDAgLTEwNyAtMTAgLTcxIC0yMyAyMSAtOCAyMyAtNDcgNiAtMTA3CmwtMTYgLTU1IC0xNyA2NiBjLTkgMzYgLTE5IDczIC0yMyA4MiAtNCAxMiAtMSAxNyAxMCAxNyAyMSAwIDIxIDE4IC0xIDIyIC0xMgoyIDIzIDQ2IDEyMyAxNTEgMTQzIDE1MiAxNzMgMTk3IDE3NCAyNTcgMCA5MCAtOCAxMDEgLTI3OSAzNzMgLTE0MSAxNDIgLTI3NgoyNzEgLTMwMSAyODUgbC00NSAyNyAtODgwIDIgYy00ODQgMCAtODkzIC0yIC05MTAgLTZ6IG0zNTkgLTI2MiBsLTcyIC03MiAtODEKNjggYy00NCAzOCAtODEgNzAgLTgxIDcyIDAgMSA2OSAzIDE1MiAzIGwxNTMgMCAtNzEgLTcxeiBtNzIxIDYzIGMtNiAtNSAtNTEKLTQzIC0xMDEgLTg0IGwtOTAgLTc2IC04NSA3MCBjLTQ2IDM4IC05MSA3NiAtOTkgODQgLTEyIDEyIDEzIDE0IDE4NSAxNCAxMDkKMCAxOTUgLTQgMTkwIC04eiBtNTY1IC01IGMtMzMgLTI5IC0xMzYgLTExNCAtMTQ2IC0xMjAgLTYgLTMgLTQyIDI1IC03OSA2MwpsLTY5IDcwIDE1NCAwIGMxMjggMCAxNTIgLTIgMTQwIC0xM3ogbS05NTkgLTEyMiBsMTIyIC05OSAtMzQgLTI5IGMtMTMyIC0xMTEKLTE2OSAtMTM4IC0xODEgLTEzMSAtMjQgMTQgLTIxOCAxNzcgLTIxOCAxODMgMCAxMCAxNzQgMTgxIDE4MiAxNzkgNCAtMiA2MgotNDggMTI5IC0xMDN6IG02MzQgMTUgYzU2IC01NiA4NiAtOTMgODAgLTk5IC00NSAtNDIgLTIyMiAtMTgwIC0yMjggLTE3OCAtNAoxIC01MiAzOCAtMTA2IDgyIGwtOTcgNzkgMTI1IDEwMyBjNjkgNTcgMTI4IDEwMyAxMzEgMTAzIDMgMCA0NiAtNDAgOTUgLTkwegptLTEyMDIgLTE5IGM0OCAtNDAgODcgLTc2IDg3IC03OSAwIC00IC01NSAtNjIgLTEyMiAtMTI5IGwtMTIzIC0xMjMgLTE5NSAwCi0xOTUgMCAyMTUgMjE1IGMxODQgMTg1IDIxNiAyMTMgMjMwIDIwMSA4IC03IDU0IC00NSAxMDMgLTg1eiBtMTg3MiAtMTIxCmwyMTAgLTIxMCAtMTk1IDEgLTE5NSAxIC0xMjIgMTI2IC0xMjEgMTI3IDk2IDgyIGM1NCA0NSAxMDIgODIgMTA3IDgyIDYgMQoxMDUgLTkzIDIyMCAtMjA5eiBtLTE2MjYgLTg0IGMzNiAtMzAgODQgLTcwIDEwNiAtOTAgbDQwIC0zNSAtMjAwIC0xIC0yMDAgMAo5MCA5MCBjNDkgNTAgOTEgOTAgOTQgOTAgMiAwIDM0IC0yNCA3MCAtNTR6IG0xMjE2IC0zNiBsOTAgLTkwIC0yMDQgMCAtMjAzIDAKMTA4IDkwIGM2MCA1MCAxMTEgOTAgMTE0IDkwIDMgMCA0NiAtNDAgOTUgLTkweiBtLTU5NCAtNyBsOTMgLTc4IC05NyAtMyBjLTUzCi0xIC0xNDAgLTEgLTE5MyAwIGwtOTUgMyA5MyA3NyBjNTEgNDMgOTYgNzggMTAwIDc4IDMgMCA0OCAtMzUgOTkgLTc3eiBtLTk2OAotMjYyIGMyNiAtNDQgNDcgLTgyIDQ3IC04NSAwIC0zIC0yMCAtNiAtNDUgLTYgLTI1IDAgLTQ1IC00IC00NSAtMTAgMCAtNSA3Ci0xMCAxNSAtMTAgMTIgMCAxNSAtMTcgMTUgLTk3IGwwIC05OCAtMzMgMzUgYy0xOSAxOSAtMTAwIDEwNiAtMTgxIDE5MyBsLTE0OAoxNTcgMTY0IDAgMTYzIDAgNDggLTc5eiBtNTYyIC02OCBjMTUgLTgyIDMwIC0xNTYgMzMgLTE2NSA0IC0xNiAtNCAtMTggLTY3Ci0xOCAtNDEgMCAtNzEgLTQgLTcxIC0xMCAwIC01IDcgLTEwIDE1IC0xMCAxMyAwIDE1IC0yMCAxNSAtMTI0IDAgLTExMCAtMgotMTI1IC0xNyAtMTI5IC0xMCAtMyAyMyAtNSA3MiAtNSA1MCAwIDg0IDIgNzggNSAtOSAzIC0xMyAzMiAtMTIgMTAxIGwxIDk3CjE0IC01NSBjOCAtMzAgMTUgLTc1IDE2IC0xMDAgMiAtMjUgNiAtNDcgOSAtNTAgNCAtMyAyOCAtMTExIDU0IC0yNDAgMjUgLTEyOQo0OSAtMjQ2IDUyIC0yNjAgMyAtMTQgLTcwIDk5IC0xNjIgMjUxIGwtMTY2IDI3NiAxNyA1MiBjMjEgNjQgMTIgMTM0IC0yMSAxNjcKLTI1IDI0IC05MyA0NyAtMTI4IDQyIC0xOSAtMyAtMzUgMTggLTEwMCAxMjcgLTQ0IDcyIC04OCAxNDUgLTk5IDE2MyBsLTIwIDMyCjIyOSAwIDIyOSAwIDI5IC0xNDd6IG01MDcgLTIwIGMtMzEgLTE1MiAtMzcgLTE3MSAtNjUgLTIwMSAtMjkgLTMwIC0zMiAtMzkKLTMxIC05NSAwIC0zNCA0IC03OSA4IC05OSA4IC0zNCA3IC0zOCAtMTEgLTM4IC0xOSAwIC0yMSA4IC0yNSAxMTUgLTQgMTAzIC03CjExOCAtMjYgMTM4IC0yOSAyOSAtMTAwIDMxIC0xMzEgMyAtMTkgLTE3IC0yMyAtMTggLTM4IC00IC0xMCA4IC0yNSAxNyAtMzMKMjAgLTExIDQgLTI0IDQ5IC00NCAxNTQgLTE2IDgyIC0zMSAxNTUgLTM0IDE2MiAtMyA5IDQ3IDEyIDIzMCAxMiBsMjM0IDAgLTM0Ci0xNjd6IG01MzcgNjcgbC02MCAtMTAwIC00NSAwIGMtMjQgMCAtNDQgLTQgLTQ0IC0xMCAwIC01IDExIC0xMCAyNSAtMTAgMTkgMAoyNSAtNSAyNSAtMjIgMCAtMjEgLTUwOSAtODgzIC01MTYgLTg3NSAtMyAzIDczIDM5NyA5MSA0NzMgNCAxOCAxNCAyMiA2MiAyNgo0OCA0IDYxIDEwIDg1IDM3IDMxIDM0IDM2IDYxIDEzIDYxIC04IDAgLTE1IC02IC0xNSAtMTMgMCAtMjUgLTQ2IC01OSAtNzUKLTU1IC00MCA0IC01NCAzMyAtNDMgODYgbDkgNDIgNzAgMCBjNjcgMCA2OSAxIDY5IDI1IDAgNTUgLTQzIDEwNSAtODkgMTA1Ci0xMiAwIC0yMSAzIC0yMSA4IDAgNCAxNCA3OCAzMSAxNjUgbDMyIDE1NyAyMjggMCAyMjggMCAtNjAgLTEwMHogbTQ4NSA3OApjLTEwIC0xMyAtNzcgLTg1IC0xNDggLTE2MSAtMTE1IC0xMjIgLTEzMyAtMTM4IC0xNjkgLTE0NCAtNjIgLTEwIC0xMDYgLTU1Ci0xMTYgLTEyMSAtNCAtMjkgLTEzIC01OCAtMjAgLTY1IC04IC04IC0xMSAyMSAtMTEgMTE2IDAgMTE4IDEwIDE3NyAzMiAxNzcgNAowIDggNSA4IDExIDAgNyAyNyA1NiA2MSAxMTAgbDYxIDk5IDE2MCAwIDE2MSAwIC0xOSAtMjJ6IG0tMjQyMCAtMzYzIGMtMTEKLTE3IC0xOCAtNDcgLTE4IC04MSAtMSAtMzMgLTYgLTU2IC0xMyAtNTkgLTcgLTIgLTEzIC0xMSAtMTMgLTE5IDAgLTE5IC0yOQotNDggLTQxIC00MSAtNSA0IC05IDU4IC05IDEyMSBsMCAxMTQgMzUgMCBjMTkgMCAzNSA1IDM1IDEwIDAgNiAtMTYgMTAgLTM1CjEwIC0zNSAwIC0zNSAwIC0zNSA0NCBsMCA0NSA1NiAtNTkgNTYgLTU4IC0xOCAtMjd6IG00OTEgLTEyIGMtMTggLTM0IC0xOQotMTE5IC0yIC0xNTIgMTkgLTM4IDYwIC02MiAxMTggLTY5IGw1MyAtNyAxMDkgLTE4MCBjNjAgLTk5IDEwMiAtMTczIDk0IC0xNjUKLTkgOCAtMTA2IDExMiAtMjE2IDIzMCBsLTIwMSAyMTUgMCAxMjUgMCAxMjUgMzAgLTQ3IGMyOCAtNDQgMjggLTQ5IDE1IC03NXoKbTgxNSAtMjI1IGMtMSAtNyAtMjUgLTEzMCAtNTQgLTI3MyBsLTUzIC0yNjAgLTExIDU1IGMtNyAzMCAtMzIgMTUzIC01NiAyNzMKbC00MyAyMTcgMTA4IDAgYzgxIDAgMTA5IC0zIDEwOSAtMTJ6IG01NDQgLTIgYzcgLTIgLTIxMSAtMjQyIC0zMjIgLTM1NiAtOAotOCA4IDIxIDM1IDY1IDI3IDQ0IDc5IDEzMCAxMTYgMTkxIGw2NyAxMTIgNDcgLTUgYzI3IC0zIDUyIC02IDU3IC03eiIvPgo8cGF0aCBkPSJNNDI2MCAxMzYwIGMwIC01IDcgLTEwIDE1IC0xMCAxMyAwIDE1IC0yOSAxNSAtMjA0IDAgLTE4NiAtMiAtMjA1Ci0xNyAtMjA5IC0xMCAtMyA3MCAtNSAxNzcgLTQgMTA3IDAgMTg1IDIgMTczIDQgLTIyIDQgLTIzIDkgLTIzIDEwMSAwIDcyIDQKMTAzIDE2IDEyMCAxNiAyMyAzNCAyOSAzNCAxMiAwIC01IC03IC0xMCAtMTUgLTEwIC0yMCAwIC0xOSAtMzQgMSAtNTQgMjAgLTIxCjY4IC0yMCA4NSAwIDcgOSAxMyAzMSAxMyA1MCAwIDE4IDIgMzEgNSAyOCAzIC0zIDI2IC02MCA1MSAtMTI3IDQxIC0xMTAgNDgKLTEyMiA3MyAtMTI3IGwyNyAtNSAtMjQgLTUyIGMtMjUgLTUyIC02NiAtODkgLTY2IC01OCAwIDggNSAxNSAxMSAxNSA2IDAgOQoxMiA3IDI4IC0zIDI0IC04IDI3IC00NSAzMCAtMzQgMyAtNDQgLTEgLTUzIC0xOCAtMjUgLTQ2IDEzIC05MCA3OCAtOTAgNjIgMAo4MyAzMSAxNDcgMjE4IDI0IDcwIDQ5IDE0MiA1NSAxNjAgNyAxNyAxOCAzMiAyNiAzMiA4IDAgMTQgNSAxNCAxMCAwIDYgLTIyCjEwIC01MCAxMCAtNDggMCAtNzAgLTE1IC0zMiAtMjIgMTggLTMgMTcgLTggLTggLTgzIGwtMjcgLTgwIC0yNSA4MCBjLTE4IDYyCi0yMSA4MSAtMTEgODMgNyAyIDEzIDggMTMgMTMgMCA5IC02MyAxMSAtMjMwIDEwIC0xOSAwIC03OSAwIC0xMzIgMCAtNjIgMAotOTggLTQgLTk4IC0xMCAwIC02IDcgLTExIDE1IC0xMSAxMyAwIDE1IC0yMSAxNSAtMTI1IGwwIC0xMjUgLTI1IDAgLTI1IDAgMAoyMTUgMCAyMTUgLTgwIDAgYy00NyAwIC04MCAtNCAtODAgLTEweiIvPgo8cGF0aCBkPSJNMjAgMTMzMCBjMCAtNSA5IC0xMCAyMCAtMTAgMTkgMCAyMCAtNyAyMCAtMTg1IDAgLTE3OCAtMSAtMTg1IC0yMAotMTg1IC0xMSAwIC0yMCAtNCAtMjAgLTEwIDAgLTE2IDI2NCAtMTMgMzA0IDQgNzEgMzAgOTAgMTE0IDM3IDE2NyAtMTYgMTYKLTM4IDI5IC00OCAyOSAtMTMgMCAtOSA2IDE0IDIwIDIzIDEzIDM0IDI5IDM5IDU0IDE4IDk4IC0zMCAxMjUgLTIxOCAxMjYgLTc5CjAgLTEyOCAtNCAtMTI4IC0xMHoiLz4KPHBhdGggZD0iTTQ4MCAxMjEwIGMtODUgLTIwIC05NSAtMTIwIC0xMiAtMTIwIDQzIDAgNjIgMTQgNjIgNDUgMCAxMiAtNSAyNgotMTIgMzMgLTkgOSAtOSAxNSAwIDI0IDE1IDE1IDMyIC0yOCAzMiAtODEgbDAgLTM5IC01NSAtNCBjLTY5IC02IC05NSAtMjcKLTk1IC03OSAwIC01MyAzMSAtNzMgOTcgLTY1IDYyIDggNzEgOCAxMTUgMCAyMSAtMyA0OCAtNCA2MSAwIDI1IDYgNDcgNDMgNDcKNzcgMCAyNyAtMjQgMTkgLTI4IC05IC0yIC0xMiAtOCAtMjIgLTEzIC0yMiAtNSAwIC05IDQyIC05IDk0IDAgMTA5IC0xMSAxMzIKLTc1IDE0NiAtNDcgMTEgLTY3IDExIC0xMTUgMHoiLz4KPHBhdGggZD0iTTQwNzUgMTIxMSBjLTQ2IC0xMSAtODIgLTM4IC05NSAtNzEgLTE4IC00MyAtOSAtMTQ0IDE2IC0xNzEgNDIgLTQ3CjE0NSAtNjQgMjA0IC0zNCAyNSAxMyA2MCA2MCA2MCA4MCAwIDE2IC0yOCAxIC0zOCAtMjAgLTE0IC0zMSAtNTIgLTUwIC04NgotNDEgLTI2IDYgLTQ2IDUyIC00NiAxMDQgMCAyMSAzIDIyIDg2IDIyIGw4NiAwIC03IDM2IGMtOCA0NyAtMjMgNzAgLTUyIDgzCi0zNCAxNiAtOTMgMjEgLTEyOCAxMnoiLz4KPC9nPgo8L3N2Zz4K"

export default logoSVG
