from string import Template
from urllib.parse import urlparse
import requests


headers = {"Authorization": "token 84928afde82e943f09188f70e272c3fda8a762cd"}


def run_query(query):
    request = requests.post('https://api.github.com/graphql', json={'query': query}, headers=headers)
    if request.status_code == 200:
        return request.json()
    else:
        raise Exception("Query failed to run by returning code of {}. {}".format(request.status_code, query))      


def get_issues(owner, name, states):
    print(name)
    queryTemplate = Template("""
        query {
          repository(owner: "$owner", name: "$name") {
            issues(first:20, states: $states) {
              edges {
                node {
                  title
                  url
                  labels(first:5) {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        
        """)

    query = queryTemplate.substitute(owner=owner, name=name, states=states)

    print(query)

    result = run_query(query) # Execute the query
    remaining_rate_limit = result["data"] # Drill down the dictionary
    print(" {}".format(remaining_rate_limit))

def create_issues_variables(url, states="OPEN"):
    path = urlparse(url)
    split = path[2].split('/')

    owner = split[1]
    name = split[2]

    print("owner: ", owner, "\nname: ", name)

    get_issues(owner, name, states)


def get_contributors(owner, name):
    
    url = ("https://api.github.com/repos/"+owner+"/"+name+"/contributors")
    print(url)

    request = requests.get(url)
    if request.status_code == 200:
        print(request.json())
        return request.json()
    else:
        raise Exception("ERROR {}".format(request.status_code)) 


def create_contributors_variables(url):
    path = urlparse(url)
    split = path[2].split('/')

    owner = split[1]
    name = split[2]

    print("owner: ", owner, "\nname: ", name)

    get_contributors(owner, name)

create_contributors_variables("https://github.com/chaoss/augur")
create_issues_variables("https://github.com/chaoss/augur")


