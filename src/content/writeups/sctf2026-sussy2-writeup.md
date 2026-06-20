# sussy2

> Challenge focus: identifying files

## Overview
A zipped archive file was given to the users, asking to find the flag from within the files.

## Recon

1. Inspect the file given

## Exploit path

Upon unzipping the file, the files inside the unzipped file looks very suspicious

```
AndroidManifest.xml
classes.dex
classes2.dex
classes3.dex
classes4.dex
classes5.dex
classes6.dex
DebugProbesKt.bin
kotlin
lib
META-INF
nothere.txt
res
resources.arsc
```
```nothere.txt``` showed ```sctf{fake_flag}```

As there is an AndroidManifest.xml file here, the challenge distribution is very likely a Android APK. Running the file command further proves this:

```bash
$ file dist.zip 
dist.zip: Android package (APK), with AndroidManifest.xml
```

So we rename ```dist.zip``` to ```dist.apk```

Next, we need an emulator to run the .apk file. Open up Android Studio and start an emulator.
After the emulator is fired up, we need to install the APK file so we can see what is going on in the app.

Using this to install the app:
```bash
adb install /path/to/your/dist.apk
```

* Note: You might have to sign and align the apk to install it.

This installs an app on the emulator with the name of suspicious.
Launching the app gives this result on the screen:
```fpgs{Vs_2u8e8_j9f_9a_8aqc5va2!!!}```

Closer inspection shows that ```fpgs``` is ```sctf``` rotated by 13 letters.
Initial suspicion of ROT13 is used here to cipher the letters.

Putting ```fpgs{Vs_2u8e8_j9f_9a_8aqc5va2!!!}``` through ROT13 on cyberchef returns the following:
```sctf{If_2h8r8_w9s_9n_8ndp5in2!!!}```

However, this still did not give the flag. Most CTFs like to use leetspeek for their flags.
Since nothing except the first word in the flag made sense, we know that the cipher is not ROT13, but with something else that edits the numbers too.

A quick Google search showed that ROT13 with number shifts is ROT18, where the letters undergo ROT13 and the numbers undergo ROT5

Trying ROT18 on the flag gives this:
```sctf{If_7h3r3_w4s_4n_3ndp0in7!!!}```
which is the correct flag for this challenge.
