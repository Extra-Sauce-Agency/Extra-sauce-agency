import subprocess
import os
import glob

commits = [
    "96a069b",
    "88b6a64",
    "65ec7f8",
    "0fbab1f",
    "9b8ac6f",
    "13e8299",
    "9507ad7",
    "52126cf",
    "5fd095e",
    "2871ee0",
    "f0c6104",
    "ded5a65",
    "a0d1c22",
    "18a467f"
]

os.chdir("/home/ubuntu/extra-sauce-agency")

for commit in commits:
    print(f"Checking commit {commit}...")
    subprocess.run(["git", "checkout", commit], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    # Run build
    res = subprocess.run(["npm", "run", "build"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if res.returncode != 0:
        print(f"Commit {commit} failed to build")
        continue
        
    # Check generated index file
    files = glob.glob("dist/assets/index-*.js")
    if files:
        js_file = os.path.basename(files[0])
        print(f"Commit {commit} generated: {js_file}")
        if "B_Cv77bH" in js_file:
            print(f"FOUND IT! Commit {commit} is the matching commit!")
            break
    else:
        print(f"Commit {commit} did not generate any index JS file")

subprocess.run(["git", "checkout", "main"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
