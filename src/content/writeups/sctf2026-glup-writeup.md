# glup

## Overview
A suspicious file was given to the users, asking to find the flag from within the files.

## Exploit Path
Lets first check the file that is given to us. Unzipping the challenge file gives us this file ```glup-challenge.img```

Running the ```file``` command on this file gives us this:
```bash
$ file glup-challenge.img 
glup-challenge.img: BTRFS Filesystem sectorsize 4096, nodesize 16384, leafsize 16384, UUID=80f055cb-3835-447c-be84-9ce797db897d, 327389184/536870912 bytes used, 1 devices
```

Since it is a BTRFS File system, we can mount it locally and see the contents inside.
```bash
$ sudo mount -o loop,subvolid=5 glup-challenge.img /mnt/btrfs
$ cd /mnt/btrfs
$ ls
  @data  @final
```

Lets check the contents of the files.
```bash
$ ls @final
  final.jpeg
```

Opening ```final.jpeg``` resulted in a dead end. ```exiftool``` and ```binwalk``` all returned nothing. this shows that the flag might not be here. Lets look in the ```@data``` folder.

```bash
$ ls -la @data
  total 16
  drwxr-xr-x 1 root root 20 Jun 22 15:58 .
  drwxr-xr-x 1 root root 22 Jun 22 15:58 ..
  drwxr-x--- 1 root root  8 Jun 22 15:58 .snapshots
```

As you can see there is a suspicious ```.snapshots``` folder here. Lets find out what is inside.

```bash
$ cd .snapshots/
  bash: cd: .snapshots/: Permission denied
$ ls -la .snapshots/
  ls: cannot open directory '.snapshots/': Permission denied
```

Since ```.snapshots``` is only accessible with ```root``` user, lets change our terminal session to the ```root``` user.

```bash
$ sudo -i
$ cd /mnt/btrfs-top/@data/.snapshots
```

Lets see the files inside ```.snapshots``` now.
```bash
$ ls -la
  total 0
  drwxr-x--- 1 root root  8 Jun 22 15:58 .
  drwxr-xr-x 1 root root 20 Jun 22 15:58 ..
  drwxr-xr-x 1 root root 32 Jun 22 15:58 1
  drwxr-xr-x 1 root root 32 Jun 22 15:58 2
  drwxr-xr-x 1 root root 32 Jun 22 15:58 3
  drwxr-xr-x 1 root root 32 Jun 22 15:58 4
```

Lets look through each folder.

```bash
$ ls 1
  info.xml  snapshot
$ ls 2
  info.xml  snapshot
$ ls 3
  info.xml  snapshot
$ ls 4
  info.xml  snapshot 
```

All of them have the same file layout. Lets check the snapshot folders of each one.

```bash
$ ls 1/snapshot/
  s1.zip
$ ls 2/snapshot/
  s2.zip
$ ls 3/snapshot/
  s3.zip
$ ls 4/snapshot/
  s4.zip
```

Lets unzip each of the files. However, since we are in the ```root``` userspace, we need to unzip the file to somewhere we can access to view it properly.

```bash
$ unzip 1/snapshot/s1.zip -d /home/tmp
$ unzip 2/snapshot/s2.zip -d /home/tmp
$ unzip 3/snapshot/s3.zip -d /home/tmp
$ unzip 4/snapshot/s4.zip -d /home/tmp
```

After unzipping, we will realise the ```s3.zip``` contains no useful information.
Opening the ```tmp``` file, we will find the different pieces of the flag in the different folders. Piecing them together we will get the flag: ```sctf{y0u_d3c1d3_t0_c4ll_m3_aft3r_4ll_th4t}```