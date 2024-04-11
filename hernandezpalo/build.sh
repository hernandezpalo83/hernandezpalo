cd ..
cd .venv
cd bin
source activate
cd ..
cd ..
cd hernandezpalo
pip install --upgrade pip
pip install -r requirements.txt
rm -fr public
cd ..
reflex init
API_URL="https://hernandezpalo.onrender.com" reflex export --frontend-only
unzip frontend.zip -d public
rm -f frontend.zip
deactivate