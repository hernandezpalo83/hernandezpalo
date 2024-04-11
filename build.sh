cd ..
cd .env
cd bin
source activate
cd ..
cd ..
cd hernandezpalo
pip install --upgrade pip
pip install -r requirements.txt
rm -fr public
reflex init
API_URL="https://portafolio-hernandezpalo.up.railway.app" reflex export --frontend-only
unzip frontend.zip -d public
rm -f frontend.zip
deactivate