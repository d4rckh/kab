echo Making data directory
mkdir data
echo Setting up the port to 80!
echo ------------------------------------------------------------
echo "| TO CHANGE THE PORT OVERWRITE THE \"PORT\" FILE!"            |
echo ------------------------------------------------------------
echo 80 > ./PORT
echo Wipping the Database!
echo You have 5 seconds from now on to cancel this by pressing CTRL + C!
echo 5
sleep 1
echo 4
sleep 1
echo 3
sleep 1
echo 2
sleep 1
echo 1
sleep 1
echo WIPPING..........
echo "{\"users: []\", \"computers\": []}" > data/db.json 
echo ------------------------------------------------------------
echo "| Installation finished, to start you have to run ./start.sh"|
echo ------------------------------------------------------------
