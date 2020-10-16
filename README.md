### For installation steps scroll below.

# kab 🔐
kab the lab man

## What does it do?
**This does NOT deploy accounts / servers / services / or literally anything**
It is just a PASSWORD manager which let's you store passwords for your dummy accounts from the lab

> Enterprise applications are cool, especially when you setup them in a lab, but it can be a pain to keep track of every dummy account you make in it :(

This does help you keep track of accounts and machines (along with the services running on them), but it **won't 
do it automatically**, you have to **manually insert** every password using a form and they will be automatically
sorted beautifully in a table where you can later see

Usually people put their LAB credentials in a text file, notion, cherry tree or one note, these are **awful** 
  choices, this is why **KAB** has been written by __d4rckh__ using: NodeJS, Ejs, lowdb and lodash

## Features 🍟

- Kepp track of Users'
  - Passwords
  - SPNs
  - Are they domain admin?
  - Are they a service account?
- Keep track of Computers'
  - What's their OS?
  - Are they running sharepoint?
  - Are they running exchange?
  - Are they serving a db?
  - Are they virtualized?
  - Are they a server or a client?
- Domain Info
  - NetBios Name (LAB)
  - Domain name (lab.local)

Here are some screenshots of the web app:

![dashboard image](/assets/dashboard.png)

![users image](/assets/users.png)

![computers image](/assets/computers.png)

**Again: You have to manually add them, just like in a password manager.**

# Linux installation

Installing:

```
git clone https://github.com/d4rckh/kab
cd kab
chmod +x ./install.sh
chmod +x ./setup.sh
chmod +x ./start.sh
./install.sh
./setup.sh
```

Running: 

```
./start.sh
```

Updating:

```
git pull origin main
```

# Windows installation 

Installing:

```
git clone https://github.com/d4rckh/kab
cd kab
./install.bat
./setup.bat
```

Running:

```
./start.bat
```

Updating: 

```
git pull origin main
```